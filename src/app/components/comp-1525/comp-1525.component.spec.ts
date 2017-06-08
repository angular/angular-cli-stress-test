/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1525Component } from './comp-1525.component';

describe('Comp1525Component', () => {
  let component: Comp1525Component;
  let fixture: ComponentFixture<Comp1525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
