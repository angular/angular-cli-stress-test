/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4289Component } from './comp-4289.component';

describe('Comp4289Component', () => {
  let component: Comp4289Component;
  let fixture: ComponentFixture<Comp4289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
