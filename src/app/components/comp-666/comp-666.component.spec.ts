/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp666Component } from './comp-666.component';

describe('Comp666Component', () => {
  let component: Comp666Component;
  let fixture: ComponentFixture<Comp666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
