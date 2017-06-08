/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp183Component } from './comp-183.component';

describe('Comp183Component', () => {
  let component: Comp183Component;
  let fixture: ComponentFixture<Comp183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
