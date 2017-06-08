/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2056Component } from './comp-2056.component';

describe('Comp2056Component', () => {
  let component: Comp2056Component;
  let fixture: ComponentFixture<Comp2056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
