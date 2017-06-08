/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp453Component } from './comp-453.component';

describe('Comp453Component', () => {
  let component: Comp453Component;
  let fixture: ComponentFixture<Comp453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
