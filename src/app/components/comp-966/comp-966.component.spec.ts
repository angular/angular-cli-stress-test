/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp966Component } from './comp-966.component';

describe('Comp966Component', () => {
  let component: Comp966Component;
  let fixture: ComponentFixture<Comp966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
