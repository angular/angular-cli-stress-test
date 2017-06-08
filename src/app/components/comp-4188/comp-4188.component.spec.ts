/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4188Component } from './comp-4188.component';

describe('Comp4188Component', () => {
  let component: Comp4188Component;
  let fixture: ComponentFixture<Comp4188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
