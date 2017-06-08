/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp124Component } from './comp-124.component';

describe('Comp124Component', () => {
  let component: Comp124Component;
  let fixture: ComponentFixture<Comp124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
