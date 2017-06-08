/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp333Component } from './comp-333.component';

describe('Comp333Component', () => {
  let component: Comp333Component;
  let fixture: ComponentFixture<Comp333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
