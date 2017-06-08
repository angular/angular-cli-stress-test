/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp444Component } from './comp-444.component';

describe('Comp444Component', () => {
  let component: Comp444Component;
  let fixture: ComponentFixture<Comp444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
