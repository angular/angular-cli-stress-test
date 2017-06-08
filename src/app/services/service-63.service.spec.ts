/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service63Service } from './service-63.service';

describe('Service63Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service63Service]
    });
  });

  it('should ...', inject([Service63Service], (service: Service63Service) => {
    expect(service).toBeTruthy();
  }));
});
