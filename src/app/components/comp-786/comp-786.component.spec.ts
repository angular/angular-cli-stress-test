/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp786Component } from './comp-786.component';

describe('Comp786Component', () => {
  let component: Comp786Component;
  let fixture: ComponentFixture<Comp786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
