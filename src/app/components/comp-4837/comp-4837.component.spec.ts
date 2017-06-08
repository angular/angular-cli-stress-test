/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4837Component } from './comp-4837.component';

describe('Comp4837Component', () => {
  let component: Comp4837Component;
  let fixture: ComponentFixture<Comp4837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
