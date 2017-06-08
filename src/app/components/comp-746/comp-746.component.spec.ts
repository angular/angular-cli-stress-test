/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp746Component } from './comp-746.component';

describe('Comp746Component', () => {
  let component: Comp746Component;
  let fixture: ComponentFixture<Comp746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
