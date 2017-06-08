/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp360Component } from './comp-360.component';

describe('Comp360Component', () => {
  let component: Comp360Component;
  let fixture: ComponentFixture<Comp360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
