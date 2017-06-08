/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp669Component } from './comp-669.component';

describe('Comp669Component', () => {
  let component: Comp669Component;
  let fixture: ComponentFixture<Comp669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
