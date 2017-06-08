/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2048Component } from './comp-2048.component';

describe('Comp2048Component', () => {
  let component: Comp2048Component;
  let fixture: ComponentFixture<Comp2048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
