/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2043Component } from './comp-2043.component';

describe('Comp2043Component', () => {
  let component: Comp2043Component;
  let fixture: ComponentFixture<Comp2043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
