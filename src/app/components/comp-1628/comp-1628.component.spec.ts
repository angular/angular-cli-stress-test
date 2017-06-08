/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1628Component } from './comp-1628.component';

describe('Comp1628Component', () => {
  let component: Comp1628Component;
  let fixture: ComponentFixture<Comp1628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
