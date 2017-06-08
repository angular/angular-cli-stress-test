/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4315Component } from './comp-4315.component';

describe('Comp4315Component', () => {
  let component: Comp4315Component;
  let fixture: ComponentFixture<Comp4315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
