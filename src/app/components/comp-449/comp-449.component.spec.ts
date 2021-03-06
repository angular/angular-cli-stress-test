/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp449Component } from './comp-449.component';

describe('Comp449Component', () => {
  let component: Comp449Component;
  let fixture: ComponentFixture<Comp449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
