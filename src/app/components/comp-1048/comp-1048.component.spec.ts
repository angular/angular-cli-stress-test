/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1048Component } from './comp-1048.component';

describe('Comp1048Component', () => {
  let component: Comp1048Component;
  let fixture: ComponentFixture<Comp1048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
