/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1433Component } from './comp-1433.component';

describe('Comp1433Component', () => {
  let component: Comp1433Component;
  let fixture: ComponentFixture<Comp1433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
