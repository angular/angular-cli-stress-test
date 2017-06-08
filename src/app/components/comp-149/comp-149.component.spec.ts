/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp149Component } from './comp-149.component';

describe('Comp149Component', () => {
  let component: Comp149Component;
  let fixture: ComponentFixture<Comp149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
