/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1348Component } from './comp-1348.component';

describe('Comp1348Component', () => {
  let component: Comp1348Component;
  let fixture: ComponentFixture<Comp1348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
