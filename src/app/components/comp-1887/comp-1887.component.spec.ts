/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1887Component } from './comp-1887.component';

describe('Comp1887Component', () => {
  let component: Comp1887Component;
  let fixture: ComponentFixture<Comp1887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
