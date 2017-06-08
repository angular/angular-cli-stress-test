/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2633Component } from './comp-2633.component';

describe('Comp2633Component', () => {
  let component: Comp2633Component;
  let fixture: ComponentFixture<Comp2633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
