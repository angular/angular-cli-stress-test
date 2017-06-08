/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service35Service } from './service-35.service';

describe('Service35Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service35Service]
    });
  });

  it('should ...', inject([Service35Service], (service: Service35Service) => {
    expect(service).toBeTruthy();
  }));
});
