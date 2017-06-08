/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service892Service } from './service-892.service';

describe('Service892Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service892Service]
    });
  });

  it('should ...', inject([Service892Service], (service: Service892Service) => {
    expect(service).toBeTruthy();
  }));
});
