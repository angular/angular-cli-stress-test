/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1720Component } from './comp-1720.component';

describe('Comp1720Component', () => {
  let component: Comp1720Component;
  let fixture: ComponentFixture<Comp1720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
