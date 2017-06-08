/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1908Component } from './comp-1908.component';

describe('Comp1908Component', () => {
  let component: Comp1908Component;
  let fixture: ComponentFixture<Comp1908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
