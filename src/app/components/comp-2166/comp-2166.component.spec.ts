/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2166Component } from './comp-2166.component';

describe('Comp2166Component', () => {
  let component: Comp2166Component;
  let fixture: ComponentFixture<Comp2166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
