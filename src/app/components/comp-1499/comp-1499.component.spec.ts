/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1499Component } from './comp-1499.component';

describe('Comp1499Component', () => {
  let component: Comp1499Component;
  let fixture: ComponentFixture<Comp1499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
