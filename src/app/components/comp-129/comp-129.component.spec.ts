/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp129Component } from './comp-129.component';

describe('Comp129Component', () => {
  let component: Comp129Component;
  let fixture: ComponentFixture<Comp129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
