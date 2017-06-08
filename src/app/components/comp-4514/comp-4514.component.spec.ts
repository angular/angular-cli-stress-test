/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4514Component } from './comp-4514.component';

describe('Comp4514Component', () => {
  let component: Comp4514Component;
  let fixture: ComponentFixture<Comp4514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
