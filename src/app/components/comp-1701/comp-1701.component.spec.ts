/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1701Component } from './comp-1701.component';

describe('Comp1701Component', () => {
  let component: Comp1701Component;
  let fixture: ComponentFixture<Comp1701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
