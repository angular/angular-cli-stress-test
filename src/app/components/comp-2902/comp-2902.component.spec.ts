/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2902Component } from './comp-2902.component';

describe('Comp2902Component', () => {
  let component: Comp2902Component;
  let fixture: ComponentFixture<Comp2902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
