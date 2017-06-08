/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2231Component } from './comp-2231.component';

describe('Comp2231Component', () => {
  let component: Comp2231Component;
  let fixture: ComponentFixture<Comp2231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
