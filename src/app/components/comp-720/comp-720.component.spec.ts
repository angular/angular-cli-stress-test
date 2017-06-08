/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp720Component } from './comp-720.component';

describe('Comp720Component', () => {
  let component: Comp720Component;
  let fixture: ComponentFixture<Comp720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
