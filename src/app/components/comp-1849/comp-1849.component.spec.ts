/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1849Component } from './comp-1849.component';

describe('Comp1849Component', () => {
  let component: Comp1849Component;
  let fixture: ComponentFixture<Comp1849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
