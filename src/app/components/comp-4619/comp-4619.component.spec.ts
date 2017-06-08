/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4619Component } from './comp-4619.component';

describe('Comp4619Component', () => {
  let component: Comp4619Component;
  let fixture: ComponentFixture<Comp4619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
