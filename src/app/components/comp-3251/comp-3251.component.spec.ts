/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3251Component } from './comp-3251.component';

describe('Comp3251Component', () => {
  let component: Comp3251Component;
  let fixture: ComponentFixture<Comp3251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
