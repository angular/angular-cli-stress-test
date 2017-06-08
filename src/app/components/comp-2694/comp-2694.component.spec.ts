/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2694Component } from './comp-2694.component';

describe('Comp2694Component', () => {
  let component: Comp2694Component;
  let fixture: ComponentFixture<Comp2694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
