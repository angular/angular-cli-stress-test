/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1814Component } from './comp-1814.component';

describe('Comp1814Component', () => {
  let component: Comp1814Component;
  let fixture: ComponentFixture<Comp1814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
