/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp432Component } from './comp-432.component';

describe('Comp432Component', () => {
  let component: Comp432Component;
  let fixture: ComponentFixture<Comp432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
