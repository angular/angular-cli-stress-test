/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1633Component } from './comp-1633.component';

describe('Comp1633Component', () => {
  let component: Comp1633Component;
  let fixture: ComponentFixture<Comp1633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
