/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp727Component } from './comp-727.component';

describe('Comp727Component', () => {
  let component: Comp727Component;
  let fixture: ComponentFixture<Comp727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
