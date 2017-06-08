/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1893Component } from './comp-1893.component';

describe('Comp1893Component', () => {
  let component: Comp1893Component;
  let fixture: ComponentFixture<Comp1893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
