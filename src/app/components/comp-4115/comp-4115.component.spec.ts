/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4115Component } from './comp-4115.component';

describe('Comp4115Component', () => {
  let component: Comp4115Component;
  let fixture: ComponentFixture<Comp4115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
