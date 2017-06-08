/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1234Component } from './comp-1234.component';

describe('Comp1234Component', () => {
  let component: Comp1234Component;
  let fixture: ComponentFixture<Comp1234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
