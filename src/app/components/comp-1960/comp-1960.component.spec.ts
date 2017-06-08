/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1960Component } from './comp-1960.component';

describe('Comp1960Component', () => {
  let component: Comp1960Component;
  let fixture: ComponentFixture<Comp1960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
