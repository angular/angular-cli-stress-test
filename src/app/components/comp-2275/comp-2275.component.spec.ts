/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2275Component } from './comp-2275.component';

describe('Comp2275Component', () => {
  let component: Comp2275Component;
  let fixture: ComponentFixture<Comp2275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
